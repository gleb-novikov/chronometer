module.exports = {
	async afterCreate(event) {
		const { result } = event;
		try {
			var attachments = [];
			if (result.files != null) {
				attachments = result.files.map(item => {return {path: strapi.config.get('server.url') + item.url}});
			} else if (result.files_url != null) {
				attachments = result.files_url.map(item => {return {path: strapi.config.get('server.url') + item}})
			}
			await strapi
				.plugin('email')
				.service('email')
				.send({
					to: 'glebneko@yandex.ru',
					from: 'mail5tudio@yandex.ru',
					subject: 'Hello world',
					html: `<p>type: ${result.type}</p>
							<p>sex: ${result.sex}</p>
							<p>comment: ${result.comment}</p>
							<p>email: ${result.email}</p>
							<p>time: ${result.time}</p>`,
					attachments: attachments
			});
			if (result.email != null) {
				await strapi
					.plugin('email')
					.service('email')
					.send({
						to: result.email,
						from: 'mail5tudio@yandex.ru',
						subject: 'Hello world',
						html: `<p>type: ${result.type}</p>
								<p>sex: ${result.sex}</p>
								<p>comment: ${result.comment}</p>
								<p>email: ${result.email}</p>
								<p>time: ${result.time}</p>`,
						attachments: attachments
				});
			}
		} catch (err) {
			console.log(err);
		}
	}
}