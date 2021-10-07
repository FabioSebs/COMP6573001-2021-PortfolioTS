package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
)

type Todo struct {
	Id        int
	Name      string
	Completed bool
}

// todos := []Todo{}

func main() {
	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("hello")
	})

	log.Fatal(app.Listen(":3000"))
}
