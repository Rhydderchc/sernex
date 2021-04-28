package fetching

import (
	"fmt"

	lyrics "github.com/rhnvrm/lyric-api-go"
)

func FetchLyrics(song string, artist string) string {
	l := lyrics.New(lyrics.WithGeniusLyrics("No"))
	lyric, err := l.Search(artist, song)
	if err != nil {
		fmt.Printf("%v: Lyrics for %v-%v were not found", err, artist, song)
	}
	return lyric

}
