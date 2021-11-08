package routes

import (
	"fabrzy/controllers"
	fiber "github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	app.Post("/", controllers.Contact)
}
