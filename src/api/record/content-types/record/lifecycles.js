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

			const entry = await strapi.entityService.findOne('api::email-setting.email-setting', 1);
			if (entry.email != null && entry.email.length > 0) {
				await strapi
					.plugin('email-designer')
					.service('email')
					.sendTemplatedEmail(
						{
							to: entry.email,
							attachments: attachments
						},
						{
							templateReferenceId: 1
						},
						{
							type: result.type,
							sex: result.sex,
							comment: result.comment,
							email: result.email,
							time: result.time,
							text: result.text
						}
				);
				if (result.email != null) {
					await strapi
						.plugin('email-designer')
						.service('email')
						.sendTemplatedEmail(
							{
								to: result.email
							},
							{
								templateReferenceId: 2
							},
							{
								type: result.type,
								sex: result.sex,
								comment: result.comment,
								email: result.email,
								time: result.time,
								text: result.text
							}
					);
				}
		}
		} catch (err) {
			console.log(err);
		}
	}
}