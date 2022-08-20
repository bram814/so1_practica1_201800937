package config

import (

	/* Fiber */
	"github.com/gofiber/fiber/v2"
	/* Mongo */
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/bson"
	// "go.mongodb.org/mongo-driver/bson/primitive"

	/* Import */
	"time"
	"context"

)


type MongoInstance struct {
	Client *mongo.Client
	Db     *mongo.Database
}

var mg MongoInstance

const dbName = "jash"
const mongoURI = "mongodb://localhost:27017/" + dbName


type Carr struct {
	ID 		string  `json:"id,omitempty" bson:"_id,omitempty"`
	Placa 	string  `json:"placa"`
	Marca  	string  `json:"marca"`
	Modelo  int64 	`json:"modelo"`
	Serie   string 	`json:"serie"`
	Color   string  `json:"color"`
}


/* Connection golang-db */
func Connect() error {

	client, err := mongo.NewClient(options.Client().ApplyURI(mongoURI))
	/* Tiempo de Espera */
	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()

	err = client.Connect(ctx)
	db := client.Database(dbName)

	/* Si existe algún error */
	if err != nil {
		return err
	}

	mg = MongoInstance{
		Client: client,
		Db:     db,
	}
	return nil
}


func PostCarr(c *fiber.Ctx) error {
	collection := mg.Db.Collection("carro")

	carr := new(Carr)

	if err := c.BodyParser(carr); err != nil {
		return c.Status(400).SendString(err.Error())
	}

	carr.ID = ""

	insertionResult, err := collection.InsertOne(c.Context(), carr)

	if err != nil {
		return c.Status(500).SendString(err.Error())
	}

	filter := bson.D{{Key: "_id", Value: insertionResult.InsertedID}}
	createdRecord := collection.FindOne(c.Context(), filter)

	createdCarr := &Carr{}
	createdRecord.Decode(createdCarr)

	return c.Status(201).JSON(createdCarr)


}

func GetCarr(c *fiber.Ctx) error {


	query := bson.D{{}}

	cursor, err := mg.Db.Collection("carro").Find(c.Context(), query)
	if err != nil {
		return c.Status(500).SendString(err.Error())
	}

	var carr []Carr = make([]Carr, 0)

	if err := cursor.All(c.Context(), &carr); err != nil {
		return c.Status(500).SendString(err.Error())
	}

	return c.JSON(carr)

}