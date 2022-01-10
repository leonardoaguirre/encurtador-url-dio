import { config } from '../config/constants';
import { Request, Response } from "express";
import shortId from 'shortid';

export class URLController {
    async encurtar(request: Request, response: Response): Promise<void> {
        const { originUrl } = request.body
        const hash = shortId.generate()

        const shortUrl = `${config.API_URL}/${hash}`

        response.json({ originUrl, hash, shortUrl })
    }
    async redirecionar(request: Request, response: Response): Promise<void> {
        const {hash} = request.params
        const url = { 
            originUrl : 'https://www.youtube.com/',
            hash : 'jSJlb6lOG',
            shortUrl : 'http://localhost:5000/jSJlb6lOG'
        }

        response.redirect(url.originUrl)
    }
}