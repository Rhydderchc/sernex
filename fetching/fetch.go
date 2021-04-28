package fetching

import (
	"fmt"

	lyrics "github.com/rhnvrm/lyric-api-go"
)

func FetchLyrics(song string, artist string) string {
	l := lyrics.New()
	lyric, err := l.Search(artist, song)

	if err != nil {
		fmt.Printf("Lyrics for %v-%v were not found", artist, song)
	}
	return string(lyric)
}
