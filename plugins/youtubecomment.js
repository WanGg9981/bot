let handler = async (m, { conn, text }) => {
    if (!text) throw ''
    conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/youtube-comment', {
        avatar: await conn.profilePictureUrl(m.sender).catch(_ => ''),
        comment: text,
        username: m.pushName
    }), 'result.png', 'Done', m)
}
handler.help = ['']
handler.tags = ['']
handler.command = /^(youtubecomment)$/i
module.exports = handler
