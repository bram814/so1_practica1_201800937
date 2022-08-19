package main

import (
	/* Fiber */
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
	/* Fiber - Template */
	"github.com/gofiber/template/html"

	/* import */
	"fmt"
	/* Route */
	"S1P1/src/config"
)

func main() {

	// Initialize standard Go html template engine
	engine := html.New("./views", ".html")
	app := fiber.New(fiber.Config{
		Views: engine,
	})

	app.Use(logger.New())


	app.Get("/", func(c *fiber.Ctx) error {
		// Render index template
		return c.Render("index", fiber.Map{})
	})

	// fmt.Println(config.ENV_PORT);
	/*
		Se ejecuta el servidor y en caso de fallar, muetra log.Fatal con el error.
	*/

	_ = app.Listen(fmt.Sprintf(":%d",config.ENV_PORT))
}
