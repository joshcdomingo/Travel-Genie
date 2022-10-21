# Task List

## Create tables diagram: 1 hour

    -country
        -id
        -name
    -city
        -id
        -name
        -fk: country_id
        -fk: scenery
    -scenery
        -id
        -name
    -entertainment
        -id
        -name
        -activity_level
        -kid_friendly
        -price_range
    -city_to_entertainment
        -fk: city_id
        -fk: entertainment_id
    -user
        -id
        -name
        -nickname
        -password
    -wish_list
        -id
        -fk: user_id
        -fk: city_id
        -fk: entertainment_id
    
## Schema creation: 2 hours
## DML: 2 hours

## Models & Enum: 4 hours

## Models:
* User 
  * id int
  * userName String
  * nickName String
  * password String
  * wishList array

* City
  * id int
  * name String
  * country String
  * scenery enum

* Entertainment
  * id int
  * name String
  * activityLevel enum
  * kidFriendly boolean
  * priceRange enum

* Wish List 
  * id
  * city String
  * entertainment List

## Enum:
* [ ] Activity Level
* [ ]  Scenery
* [ ] Price Range

## Data Layer:
* [ ] User mapper -- 1 hour
* [ ] City mapper -- 1 hour
* [ ] Entertainment -- mapper 1 hour
* [ ] WishList -- mapper 2 hours
TOTAL: 5 hours

### Testing for user, city, entertainment, wish list
* Read, Create, Update & Delete for wish list 
  * [ ] Positive tests: 8 hours
          - shouldRead
          - shouldCreate
          - shouldUpdate
          - shouldDeleteWishListItem 
  * [ ] Negative tests: 4 hours
          - shouldNotReadNonExisting
          - shouldNotCreateNonExisting
          - shouldNotUpdateNonExisting
          - shouldNotDeleteNonExisting 
  * [ ] JdbcTemplateRepository for user -- 2 hours
      * add()
      * findByUserName()
  * [ ] JdbcTemplateRepository for wish list -- 4 hours
      * findAll()
      * findById()
      * add()
      * update()
      * delete()
  * [ ] JdbcTemplateRepository for city -- 2 hours
      * findAll()
      * findByEntertainment()
  * [ ] JdbcTemplateRepository for entertainment -- 2 hours
      * findAll()
      * findByActivityLevel()

TOTAL: 27 hours

### Domain Layer
* [ ] Result 
* [ ] ResultType -- 1 hour for Result and ResultType
* [ ] WishListService -- 4 hours
    * [ ] Create 
      * [ ]  userId cannot be null
      * [ ]  cityId cannot be duplicated if userId is the same
      * [ ] entertainment cannot be empty
    * [ ] Update
      * [ ]  userId cannot be null
      * [ ]  cityId cannot be duplicated if userId is the same 
      * [ ] entertainment cannot be empty
    * [ ] Delete
      * [ ] Each item is deleted individually

* Testing for WishListService 

  * [ ] Positive tests: 8 hours 
    * shouldRead
    * shouldCreate
    * shouldUpdate
    * shouldDeleteById

  * [ ] Negative tests: 12 hours
    * shouldNotReadNonExisting
    * shouldNotCreateWithoutScenery
    * shouldNotCreateWithoutCountry
    * shouldNotCreateNonExisting
    * shouldNotUpdateNonExisting
    * shouldNotDeleteNonExisting
    * shouldNotCreateNameIfNull
    * shouldNotCreateActivityLevelIfNull
    * shouldNotCreatePriceRangeIfNull
    * shouldNotCreateDuplicateName
    * shouldNotUpdateNullPriceRange
    * shouldNotDeleteNonExistingId

TOTAL: 25 hours

### Controller
* [ ] GlobalExceptionHandler: 2 hours
  * [ ] DataIntegrityException - Bad request
  * [ ] DataAccessException - Internal server error
  * [ ] IllegalArgumentException - Internal server error
  * [ ] NullPointerException - Bad request
  * [ ] Exception - Internal server error       
  * [ ] ErrorResponse: 1 hour
  * [ ] WishListController:
    * GET - 2 hours
      * Endpoint: api/travelgenie/wishlist
    
    * POST - 2 hours
      * Endpoint: api/travelgenie/wishlist

    * PUT - 2 hours
      * Endpoint: api/travelgenie/wishlist/1 

    * DELETE - 2 hours
      * Endpoint: api/travelgenie/wishlist/1
    
  * [ ] EntertainmentController:
    * GET - 2 hours
      * Endpoint: api/travelgenie/entertainment
  
  * [ ] CitiesController:
    * GET - 2 hours
      * Endpoint: api/travelgenie/cities

* Controller Testing
  * [ ] WishListController -- 2 hours
  * [ ] EntertainmentController -- 2 hours
  * [ ] CitiesController -- 2 hours

TOTAL: 21 hours

### Security Layer: 
* [ ] UserJdbcRepository -- 1.5 hours
* [ ] UserService -- 1.5 hours
* [ ] JwtConverter -- 1.5 hours
* [ ] JwtRequestFilter -- 1.5 hours
* [ ] AuthController -- 1.5 hours
* [ ] SecurityConfig -- 1.5 hours
TOTAL: 9 hours

### React Components
* Components
  * [ ] App -- 1 hour
  * [ ] Navigation -- 1 hour
  * [ ] Home -- 1 hour
  * [ ] User -- 2 hours
  * [ ] Registration form (User fills out this form to register for an account) -- 2 hours
  * [ ] Login form (User uses this form to log in to the site) -- 2 hours
  * [ ] WishList form (User fills out form, then the wishlist is displayed) -- 4 hours
  * [ ] Make wish game (User chooses wishes (scenery, activity level, kid friendly, price range shown in panels) to display on WishList, Genie is displayed) -- 2 hours
  * [ ] WishList details (display wish list) -- 2 hours
  * [ ] Genie (Genie animation) -- 4 hours
  * [ ] Not found (404 error page) -- 2 hours
TOTAL: 23 hours

* Create a task for component wireframes
  * [ ] App -- 1 hour
  * [ ] Navigation -- 1 hour
  * [ ] Home -- 1 hour
  * [ ] User -- 1 hour
  * [ ] Registration form -- 1 hour
  * [ ] Login form -- 1 hour
  * [ ] WishList -- 1 hour
  * [ ] Make wish game -- 1 hour
  * [ ] WishList details -- 1 hour
  * [ ] Genie -- 1 hour
  * [ ] Not found -- 1 hour
TOTAL: 12 hours

* A React Router task
  * [ ] App.js react router -- 1 hour
TOTAL: 1 hour

* Fetch React service methods
  * [ ] User.js authorization -- 1 hour
  * [ ] import{ createContext } from "react"; -- 1 hour
TOTAL: 2 hours

* Testing for React components
* Components
* [ ] App -- 1 hour
* [ ] Navigation -- 1 hour
* [ ] Home -- 1 hour
* [ ] User -- 2 hours
* [ ] Registration form (User fills out this form to register for an account) -- 2 hours
* [ ] Login form (User uses this form to log in to the site) -- 2 hours
* [ ] WishList form (User fills out form, then the wishlist is displayed) -- 4 hours
* [ ] Make wish game (User chooses wishes (scenery, activity level, kid friendly, price range shown in panels) to display on WishList, Genie is displayed) -- 2 hours
* [ ] WishList details (display wish list) -- 2 hours
* [ ] Genie (Genie animation) -- 4 hours
* [ ] Not found (404 error page) -- 2 hours
TOTAL: 23 hours

### Presentation:
  * Type of app -- 1.5 hours
  * Purpose -- 1.5 hours
  * How app was designed -- 3 hours
    * Languages used
    * Layers (3 layer architecture)
    * React UI
  * Challenges -- 1.5 hours
  * Future expansion ideas -- 1.5 hours
  * Create script -- 4 hours
  * Practice -- 4 hours
TOTAL: 17 hours

### Implementing GreenSock Animation:
* Research -- 4 hours
* Decide where to use it -- 1 hour
* Design -- 4 hours
* Writing code - 2 hours
TOTAL: 11 hours

### Daily Group Communication
* Stand up -- 1 hour
10 DAY TOTAL: 10 hours

### QA / Debugging
* FrontEnd -- 4 hours
* BackEnd -- 4 hours
* Database -- 4 hours
TOTAL: 12 hours

GRAND TOTAL: 206 HOURS

### Spring dependency injection: 4 hours

``` <?xml version="1.0" encoding="UTF-8"?>
 
 <project xmlns="http://maven.apache.org/POM/4.0.0"

 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"

 xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">

 <modelVersion>4.0.0</modelVersion>

 <groupId>learn</groupId>

 <artifactId>solar-farm</artifactId>
 
 <version>1.0-SNAPSHOT</version>

 <properties>

 <maven.compiler.source>17</maven.compiler.source>

 <maven.compiler.target>17</maven.compiler.target>

 </properties>

 <parent>

 <groupId>org.springframework.boot</groupId>

 <artifactId>spring-boot-starter-parent</artifactId>

 <version>2.7.0</version>

 <relativePath/>

 </parent>

 <dependencies>

 <dependency>

 <groupId>org.springframework.boot</groupId>

 <artifactId>spring-boot-starter-web</artifactId>

 </dependency>

 <dependency>

 <groupId>org.springframework.boot</groupId>

 <artifactId>spring-boot-devtools</artifactId>

 <scope>runtime</scope>

 </dependency>

 <dependency>

 <groupId>org.springframework.boot</groupId>

 <artifactId>spring-boot-starter-jdbc</artifactId>

 </dependency>

 <dependency>

 <groupId>mysql</groupId>

 <artifactId>mysql-connector-java</artifactId> 

 </dependency>

 <!-- Security dependencies -->

 <dependency>

 <groupId>org.springframework.boot</groupId>

 <artifactId>spring-boot-starter-security</artifactId>

 </dependency>

 <!-- JJWT -->
 <dependency>

 <groupId>io.jsonwebtoken</groupId>

 <artifactId>jjwt-api</artifactId>

 <version>0.11.5</version>

 </dependency>

 <dependency>

 <groupId>io.jsonwebtoken</groupId>

 <artifactId>jjwt-impl</artifactId>

 <version>0.11.5</version>

 <scope>runtime</scope>

 </dependency>

 <dependency> 

 <groupId>io.jsonwebtoken</groupId>

 <artifactId>jjwt-jackson</artifactId> <!-- or jjwt-gson if Gson is preferred -->

 <version>0.11.5</version>

 <scope>runtime</scope>

 </dependency>

 <dependency>

 <groupId>org.springframework.boot</groupId>

 <artifactId>spring-boot-starter-test</artifactId>

 <scope>test</scope>

 <exclusions> 

 <exclusion> 

 <groupId>org.junit.vintage</groupId>

 <artifactId>junit-vintage-engine</artifactId> 

 </exclusion>

 </exclusions>

 </dependency>

 </dependencies>

 </project> ```
