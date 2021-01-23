require('dotenv').config();
const express = require('express');
const Discord = require('discord.js');
const app = express();

const token = process.env.TOKEN;

const client = new Discord.Client();

var playing = false;


client.on('ready', function(){
    console.log('uwu server is running');
});

client.on('message', async function(message){
    if(message.content==="-p play" || message.content==='-p pause' && message.guild.voice.channel){

        const connection = await message.member.voice.channel.join();
        if(message.content==='-p play'){
            const dispatcher = connection.play('./music/song.mp3');
            dispatcher.setVolume(0.25);
            
        }else{
            const dispatcher = connection.play('./music/song.mp3');
            dispatcher.pause();
        }
        

    }


    
    if(message.content==='-p join'){
        message.reply('Hello');
       
        
        if(message.member.voice.channel){
            const connection = await message.member.voice.channel.join();
            
        }else{
            message.channel.send('bro u gotta be in a channel first');
        }
    }
    if(message.content==='-p fuck off'){
        message.member.voice.channel.leave();
        
    }
    
    if(message.content==="-p start song quiz"){
        message.channel.send('Starting Song Quiz');
        message.channel.send('type genre or paste a youtube playlist')
        console.log(message.member.voice.channel.members)
        var listOfUsers = message.member.voice.channel.members
        var usersObject = {}
        //TODO: work on making this get all list of users
      
    }

});

//dadbot functionality

client.on('message', function(message){
    if(message.author.bot){
        
    }else{
        if(message.content.includes('im') || message.content.includes("i'm") || message.content.includes("I'm")){
        message.channel.send("Hi " + message.content.substring(message.content.indexOf(' ')+1) + ", I'm music bot");
        }
    }
    
});



client.login(token).catch(function(){
    console.log('uwu i made a fucky');
});

app.get('/', function(req,res){
    res.send('hello');
});




app.listen(3000, function(){
    console.log('Server running on port 3000');
});