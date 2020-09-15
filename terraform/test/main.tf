provider "heroku" {
  version = "~> 2.0"
}


resource "heroku_app" "hello_world" {
  name = "esben-test"
  region = "eu"
}
