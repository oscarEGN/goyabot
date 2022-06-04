module.exports = {
    name: 'ping',
    description: 'First command',
    execute(message, args){
        message.channel.send('pong');
    }
}