package main

import (
	"github.com/Rhydderchc/Sernex/fetching"
	"github.com/gofiber/fiber/v2"
)

type Lyrics struct {
	song   string
	artist string
	lyrics string
}
type Picture struct {
	picture string
}

func main() {
	server := fiber.New()
	server.Static("/", "./public")
	api := server.Group("/api")
	v1 := api.Group("/v1")
	v1.Get("/", func(ctx *fiber.Ctx) error {
		return ctx.SendString("Coolio \n")
	})
	v1.Get("/lyrics", func(ctx *fiber.Ctx) error {
		var artist string = ctx.Query("artist")
		var song string = ctx.Query("song")
		lyrics := fetching.FetchLyrics(artist, song)

		return ctx.JSON(fiber.Map{
			"song":   song,
			"artist": artist,
			"lyrics": lyrics,
		})
	})
	space := v1.Group("/space")
	space.Get("/dailypicture", func(ctx *fiber.Ctx) error {
		var imageUrl string = fetching.FetchSpaceApod()
		return ctx.SendString(imageUrl + "\n")
	})
	server.Listen(":3000")

}
