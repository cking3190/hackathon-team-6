# Details

**Project** : High Availability during Search Pipeline Changes  
**Team Number** : 6  
**Team Name** : Manchester Is Red  
**Demonstration Video** : _Insert link to demonstration video_

# Overview

The application provides a User Interface that provides advanced searching capabilities such as auto-completion 
and boosting search results based on specific criteria.  Search conditions can be modified with minimal effort and
with no downtime.

# Justification

The group decided to construct an application that would demonstrate not only the value of an integrated search engine
with a database but, most importantly, without the expense of an ETL process while indicating how quickly 
search priority could be modified with changing market conditions.  

Inspiration was from the ease of use and the
power of making real-time changes to critical search functionality in minimum time without an expensive development
sprint from a software engineering team.  From a Presales perspective, this demonstration will show the customer
exactly what happens and what effort is required when a customer determines they need to change search priority.

This illustrates developer productivity, resiliency, scalability, and ease of use among a variety of integration points 
with MongoDB's Application Development Platform.

# Detailed Application Overview
### Application Architecture
![](/Users/bmincey/WebstormProject/hackathon-team-6/img/Hackathon-6-Architecture-Diagram.png)

### Technologies Used
* MongoDB Atlas
* Atlas Search (Autocomplete, Boost, Pin, Bury, Hide, Search Priority)
* MongoDB Charts
* MongoDB Realm (Functions, Hosting, GitHub Integration)
* React (Axios)

### What the Application Does and How it Works
The application simulates a real-world search scenario for an ecommerce or products based company (MongoMart).  Search
criteria can be modified and weighted utilizing the Pin, Hide, Bury, and Boost features of Atlas Search.  


# Roles and Responsibilities

_Team Members/Contributions_
* Chris King - User Interface/Demo
* Julia Guenther - Realm Functions/Demo/Data Load 
* Benoit Lacharite - Data Wrangler/Search Pipeline
* Suraj Shetty - Search Query Development
* Leonardo Anez - User Interface
* Blaine Mincey - Data Generation/Documentation

# Demonstration Script
### Setup
1. Create MongoDB Atlas Cluster w/ database user and network whitelisting.
2. Load products collection from /data directory
3. Create Atlas Search indexes on products collection
   1. 'default' index with [dynamic] index fields
   2. 'autocomplete' index for 'Product Name' field and dynamic mapping 'off'
4. Deploy Realm application with Realm command line interface

### Demonstration Script

#### Key Points to Emphasize

#### Tear down instructions
