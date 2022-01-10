import { configs } from '../config/constants';
import { Request, Response } from "express";
import shortId from 'shortid';
import { UrlModel } from '../model/Url';

export class URLController {
    async encurtar(request: Request, response: Response): Promise<void> {
        const { originUrl } = request.body
        const url = await UrlModel.findOne({ originUrl })

        if (url) {
            response.json(url)
            return
        }
        const hash = shortId.generate()
        const shortUrl = `${configs.API_URL}/${hash}`

        const novaUrl = await UrlModel.create({ hash, shortUrl, originUrl })

        response.json(novaUrl)
    }
    async redirecionar(request: Request, response: Response): Promise<void> {
        const { hash } = request.params

        const url = await UrlModel.findOne({ hash })
        if (url) {
            response.redirect(url.originUrl)
        }
        response.status(400).json('Esta URL nao existe')
    }
}