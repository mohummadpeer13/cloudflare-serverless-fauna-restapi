# REST API USING CLOUDFLARE WORKERS AND FAUNA

In this project, we are built an REST API using Cloudflare Workers and Fauna. 
It manages a simple CRUD (Create, Read, Update, Delete) operations.

## Prerequisites
- A Fauna account (https://fauna.com)

- Cloudflare account (https://www.cloudflare.com)

- Node 18 or more installed

  -- sudo apt-get -y update
  
  -- sudo apt-get -y install curl
  	
  -- curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
		
  -- sudo apt-get -y update
		
  -- sudo apt-get -y install nodejs
  
  -- sudo apt-get -y install gcc g++ make
		
  -- curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null

  -- echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
		
  -- sudo apt-get -y update
  
  -- sudo apt-get -y install yarn
		
  -- node -v && npm -v && yarn -v
  
## Create a wrangler project
 ### Install wrangler globaly

  -- npm install wrangler@latest -g
  
 ### Init wrangler project

  -- wrangler init restapi
  
  -- What type of application do you want to create? "Hello World" worker
  
  -- Do you want to use Typescript? Yes
  
  -- Do you want to deploy your application? No
  
 ### Run project

  -- In restapi folder -> npm run start
  
 ### Deploy project

  -- In restapi folder -> npm run deploy

## Install Fauna package

  -- npm i fauna --save
  
## Configure Fauna Database

  -- In Fauna Dashboard create a new database -> rest
  
  -- After create a new collection -> Users
  
  -- In database param create a new key -> mydatabasekey 
  
  -- Copy the token
  
  -- In your wrangler.toml file in the root directory add the following environment variables
  
  -- in the section [vars]
  
     [vars]

     FAUNA_SECRET="fnAFjpQucxxxxxxxxxxxxxxxxxxxxxx-DK"


