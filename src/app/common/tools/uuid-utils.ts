import * as uuid from 'uuid';
export class UUIDUtils {

    public static generate(): string {
        return uuid.v1();
    }


}
