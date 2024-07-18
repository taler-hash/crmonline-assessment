
# CRM Online Assessment ( CRUD Application) By: Jurie Tylier Pedrogas

## File Structure

 - Client - Front End
 - Server - Back End

## Tech stacks
- Laravel
- React.JS ( Typescript )
- Tailwind.CSS
- ShadCN
- Mysql
- Docker

 ## Prerequisites
  You must install this before going to the installation

  - Git 
  - Docker

  ## Installation

  - Clone the app `git clone https://github.com/taler-hash/crmonline-assessment.git`
  - After cloning run this command `cd crmonline-assessment` to go in the application directory
  - after that run this command to install the app `docker-compose up -d && docker exec laravel-docker bash -c "composer update && cp .env.dummy .env && php artisan migrate"`.
  - after that you can now access the application through `localhost:8000`

  ## Application
  - Starting the application `docker-compose up -d`
  - Stopping the application `docker-compose stop`

  ## Unit Test
- Assuming you started the application run this command in the directory `docker exec laravel-docker bash -c "php artisan test"`

## PS.
- the build file of the front end is located in resources in server you just can serve the server directly to see the application.
