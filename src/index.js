const express = require('express')
const amqplib = require('amqplib')
const {EmailService} =require('./services')
async function connectQueue(){
try {
    const connection = await amqplib.connect("amqp://localhost");
    const channel = await connection.createChannel();
    await channel.assertQueue("noti-queue");
    channel.consume("noti-queue",async (data)=>{
        const object = JSON.parse(`${Buffer.from(data.content)}`);
        await EmailService.sendEmail("vinyassatheesh@gmail.com",object.recepientEmail, object.subject, object.text)
        channel.ack(data)
    })
} catch (error) {
    
}
}
const {ServerConfig, Logger} =require('./config')
const apiRoutes = require('./routes')
const app =express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT , async () => {
    console.log(`server started on ${ServerConfig.PORT}`);
    Logger.info("Sucessfully started server ",{});
    await connectQueue();
    console.log("queue is up")
});