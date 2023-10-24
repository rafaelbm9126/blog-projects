up:
	docker run -it --rm -v ${PWD}:/app -w /app -p 4321:4321 node:latest npm run dev

bash:
	docker run -it --rm -v ${PWD}:/app -w /app node:latest bash
