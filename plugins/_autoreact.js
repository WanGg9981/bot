let handler = async (m, { conn }) => {
	let emot = "✅"
	conn.sendMessage(m.chat, {
		react: {
			text: emot,
			key: m.key
		}
	})
}
handler.command = new RegExp
module.exports = handler