docker-dev:
	docker-compose -f docker-compose.develop.yml up

docker-build:
	docker-compose up

docker-down:
	docker-compose down