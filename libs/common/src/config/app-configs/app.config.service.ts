import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";


@Injectable()
export class AppConfigService extends ConfigService {
    get env(): string {
        return this.get<string>('app.APP_ENV');
    }

    get gatewayPort(): string {
        return this.get<string>('app.GATEWAY_PORT')
    }

    get ordersPort(): string {
        return this.get<string>('app.ORDERS_SERVICE_PORT')
    }

    get paymentPort(): string {
        return this.get<string>('app.PAYMENT_SERVICE_PORT')
    }
}