package config

import (

	/* Fiber */
	"github.com/gofiber/fiber/v2"
	/* Mongo */
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/bson"

	/* Import */
	"time"
	"context"

)


type MongoDbInstance struct {
	Client *mongo.Client
	Db     *mongo.Database
}

var ENV_INSTACE_MONGO MongoDbInstance

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

	ENV_INSTACE_MONGO = MongoDbInstance{
		Client: client,
		Db:     db,
	}
	return nil
}


func PostCarr(c *fiber.Ctx) error {
	collection := ENV_INSTACE_MONGO.Db.Collection("carro")

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

	cursor, err := ENV_INSTACE_MONGO.Db.Collection("carro").Find(c.Context(), query)
	if err != nil {
		return c.Status(500).SendString(err.Error())
	}

	var carr []Carr = make([]Carr, 0)

	if err := cursor.All(c.Context(), &carr); err != nil {
		return c.Status(500).SendString(err.Error())
	}

	return c.JSON(carr)

}


func PostUpdateCar(c *fiber.Ctx) error {

	idParam := c.Params("placa")

	carro := new(Carr)

	if err := c.BodyParser(carro); err != nil {
		return c.Status(400).SendString(err.Error())
	}



	query := bson.D{{Key: "placa", Value: idParam}}

	if(carro.Marca != "" && carro.Modelo != -1 && carro.Serie != "" && carro.Color != "") {

		update := bson.D{
		{Key: "$set",
			Value: bson.D{
				{Key: "marca",  Value: carro.Marca},
				{Key: "modelo", Value: carro.Modelo},
				{Key: "serie",  Value: carro.Serie},
				{Key: "color",  Value: carro.Color},
				},
			},
		}
		err := ENV_INSTACE_MONGO.Db.Collection("carro").FindOneAndUpdate(c.Context(), query, update).Err()

		if err != nil {
			if err == mongo.ErrNoDocuments {
				return c.SendStatus(403)
			}
			return c.SendStatus(500)
		}


	} else if(carro.Marca != "" && carro.Modelo == -1 && carro.Serie != "" && carro.Color != "") {

		update := bson.D{
		{Key: "$set",
			Value: bson.D{
				{Key: "marca",  Value: carro.Marca},
				{Key: "serie",  Value: carro.Serie},
				{Key: "color",  Value: carro.Color},
				},
			},
		}
		err := ENV_INSTACE_MONGO.Db.Collection("carro").FindOneAndUpdate(c.Context(), query, update).Err()

		if err != nil {
			if err == mongo.ErrNoDocuments {
				return c.SendStatus(403)
			}
			return c.SendStatus(500)
		}


	} else if(carro.Marca != "" && carro.Modelo == -1 && carro.Serie == "" && carro.Color != "") {

		update := bson.D{
		{Key: "$set",
			Value: bson.D{
				{Key: "marca",  Value: carro.Marca},
				{Key: "color",  Value: carro.Color},
				},
			},
		}
		err := ENV_INSTACE_MONGO.Db.Collection("carro").FindOneAndUpdate(c.Context(), query, update).Err()

		if err != nil {
			if err == mongo.ErrNoDocuments {
				return c.SendStatus(403)
			}
			return c.SendStatus(500)
		}


	} else if(carro.Marca != "" && carro.Modelo == -1 && carro.Serie == "" && carro.Color == "") {

		update := bson.D{
		{Key: "$set",
			Value: bson.D{
				{Key: "marca",  Value: carro.Marca},
				},
			},
		}
		err := ENV_INSTACE_MONGO.Db.Collection("carro").FindOneAndUpdate(c.Context(), query, update).Err()

		if err != nil {
			if err == mongo.ErrNoDocuments {
				return c.SendStatus(403)
			}
			return c.SendStatus(500)
		}


	} else if(carro.Marca == "" && carro.Modelo != -1 && carro.Serie != "" && carro.Color != "") {
		update := bson.D{
		{Key: "$set",
			Value: bson.D{
				{Key: "modelo", Value: carro.Modelo},
				{Key: "serie",  Value: carro.Serie},
				{Key: "color",  Value: carro.Color},
				},
			},
		}
		err := ENV_INSTACE_MONGO.Db.Collection("carro").FindOneAndUpdate(c.Context(), query, update).Err()

		if err != nil {
			if err == mongo.ErrNoDocuments {
				return c.SendStatus(403)
			}
			return c.SendStatus(500)
		}

	} else if(carro.Marca == "" && carro.Modelo != -1 && carro.Serie == "" && carro.Color != "") {
		update := bson.D{
		{Key: "$set",
			Value: bson.D{
				{Key: "modelo", Value: carro.Modelo},
				{Key: "color",  Value: carro.Color},
				},
			},
		}
		err := ENV_INSTACE_MONGO.Db.Collection("carro").FindOneAndUpdate(c.Context(), query, update).Err()

		if err != nil {
			if err == mongo.ErrNoDocuments {
				return c.SendStatus(403)
			}
			return c.SendStatus(500)
		}

	} else if(carro.Marca == "" && carro.Modelo != -1 && carro.Serie == "" && carro.Color == "") {
		update := bson.D{
		{Key: "$set",
			Value: bson.D{
				{Key: "modelo", Value: carro.Modelo},
				},
			},
		}
		err := ENV_INSTACE_MONGO.Db.Collection("carro").FindOneAndUpdate(c.Context(), query, update).Err()

		if err != nil {
			if err == mongo.ErrNoDocuments {
				return c.SendStatus(403)
			}
			return c.SendStatus(500)
		}

	} else if(carro.Marca == "" && carro.Modelo == -1 && carro.Serie != "" && carro.Color != "") {
		update := bson.D{
		{Key: "$set",
			Value: bson.D{
				{Key: "serie",  Value: carro.Serie},
				{Key: "color",  Value: carro.Color},
				},
			},
		}
		err := ENV_INSTACE_MONGO.Db.Collection("carro").FindOneAndUpdate(c.Context(), query, update).Err()

		if err != nil {
			if err == mongo.ErrNoDocuments {
				return c.SendStatus(403)
			}
			return c.SendStatus(500)
		}
	} else if(carro.Marca == "" && carro.Modelo == -1 && carro.Serie != "" && carro.Color == "") {
		update := bson.D{
		{Key: "$set",
			Value: bson.D{
				{Key: "serie",  Value: carro.Serie},
				},
			},
		}
		err := ENV_INSTACE_MONGO.Db.Collection("carro").FindOneAndUpdate(c.Context(), query, update).Err()

		if err != nil {
			if err == mongo.ErrNoDocuments {
				return c.SendStatus(403)
			}
			return c.SendStatus(500)
		}
	} else if(carro.Marca == "" && carro.Modelo == -1 && carro.Serie == "" && carro.Color != "") {
		update := bson.D{
		{Key: "$set",
			Value: bson.D{
				{Key: "color",  Value: carro.Color},
				},
			},
		}
		err := ENV_INSTACE_MONGO.Db.Collection("carro").FindOneAndUpdate(c.Context(), query, update).Err()

		if err != nil {
			if err == mongo.ErrNoDocuments {
				return c.SendStatus(403)
			}
			return c.SendStatus(500)
		}
	}
	
	
	return c.Status(200).JSON(carro)
}


func DeleteCar(c *fiber.Ctx) error {

	idParam := c.Params("placa")

	carro := new(Carr)

	if err := c.BodyParser(carro); err != nil {
		return c.Status(400).SendString(err.Error())
	}


	query := bson.D{{Key: "placa", Value: idParam}}
	result, err := ENV_INSTACE_MONGO.Db.Collection("carro").DeleteOne(c.Context(), &query)

	if err != nil {
		return c.SendStatus(500)
	}

	if result.DeletedCount < 1 {
		return c.SendStatus(404)
	}

	return c.Status(200).JSON("Eliminador")
}