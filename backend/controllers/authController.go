package controllers

import (
	"fabrzy/database"
	"fabrzy/models"
	fiber "github.com/gofiber/fiber/v2"
)

func Contact(c *fiber.Ctx) error {
	var data map[string]string

	if err := c.BodyParser(&data); err != nil {
		return err
	}

	user := models.User{
		Email:   data["email"],
		Subject: data["subject"],
		Body:    data["body"],
	}

	database.DB.Create(&user)
	return c.JSON(user)
}
