package main

import (
	/* Fiber */
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
	 "github.com/gofiber/fiber/v2/middleware/cors"
	/* Fiber - Template */
	"github.com/gofiber/template/html"


	/* import */
	"fmt"
	"log"
	/* Route */
	"S1P1/src/config"
)




func main() {
	/* Connect */
	if err := config.Connect(); err != nil {
		log.Fatal(err)
	}

	// Initialize standard Go html template engine
	engine := html.New("./views", ".html")
	app := fiber.New(fiber.Config{
		Views: engine,
	})

	app.Use(cors.New())
	app.Use(logger.New())


	app.Get("/", func(c *fiber.Ctx) error {
		// Render index template
		return c.Render("index", fiber.Map{})
	})

	app.Get("/carro", config.GetCarr) // ver Carros
	app.Post("/carro", config.PostCarr) // Ingresar Carro

	// app.Put("/carro")
	// app.Delete("/carro")

	_ = app.Listen(fmt.Sprintf(":%d",config.ENV_PORT))
}
