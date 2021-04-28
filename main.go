package main

import (
	"fmt"

	"github.com/Rhydderchc/Sernex/fetching"
	"github.com/gofiber/fiber/v2"
)

type Lyrics struct {
	song   string
	artist string
	lyrics string
}

func main() {
	server := fiber.New()
	api := server.Group("/api")
	v1 := api.Group("/v1")
	v1.Get("/", func(ctx *fiber.Ctx) error {
		return ctx.SendString("Coolio \n")
	})
	v1.Get("/lyrics", func(ctx *fiber.Ctx) error {
		var artist string = ctx.Query("artist")
		var song string = ctx.Query("song")
		lyrics := fetching.FetchLyrics(artist, song)
		fmt.Println(lyrics)
		data := Lyrics{
			song:   ctx.Query("song"),
			artist: ctx.Query("artist"),
			lyrics: lyrics,
		}
		return ctx.JSON(data)
	})
	server.Listen(":3000")

}
