package fetching

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
)

type ImageStructure struct {
	Url string `json:"url"`
}

func FetchSpaceApod() string {
	url := "https://api.nasa.gov/planetary/apod?api_key=NO_NO_NO"

	ImageStruct := ImageStructure{}
	spaceClient := http.Client{}
	req, err := http.NewRequest(http.MethodGet, url, nil)
	if err != nil {
		log.Fatal(err)
	}
	res, getErr := spaceClient.Do(req)
	if getErr != nil {
		log.Fatal(getErr)
	}

	if res.Body != nil {
		defer res.Body.Close()
	}

	body, readErr := ioutil.ReadAll(res.Body)
	if readErr != nil {
		log.Fatal(readErr)
	}
	jsonErr := json.Unmarshal(body, &ImageStruct)
	if jsonErr != nil {
		log.Fatal(jsonErr)
	}
	return ImageStruct.Url
}
