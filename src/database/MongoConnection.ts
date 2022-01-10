import { configs } from '../config/constants'
import mongoose, { ConnectOptions } from 'mongoose'

export default class MongoConnection {
    async connection(): Promise<void> {
        try {
            await mongoose.connect(configs.MONGO_CONNECTION, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            } as ConnectOptions)
                .then((res) => {
                    console.log(
                        'Connected to Distribution API Database - Initial Connection'
                    );
                })
        } catch (error) {
            console.log(error);
        }
    }

}