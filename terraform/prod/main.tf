provider "heroku" {
  version = "~> 2.0"
}

variable "esben_hello_world" {
  description = "Esbens overengineered Hello World-API"
}

resource "heroku_app" "hello_world" {
  name = var.esben_hello_world
  region = "eu"
}