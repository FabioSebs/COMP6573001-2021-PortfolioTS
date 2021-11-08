package models

type User struct {
	Id      uint   `json:"id"`
	Email   string `json:"email" gorm:"unique"`
	Subject string `json:"subject"`
	Body    string `json:"body"`
}
