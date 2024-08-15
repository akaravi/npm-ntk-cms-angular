export class ProcessInfoModel {
    isComplate = false;
    isSuccess = false;
    title = '';
    component = '';
    infoAreaId = '';
    guid = `${this.S4()}${this.S4()}-${this.S4()}-${this.S4()}-${this.S4()}-${this.S4()}${this.S4()}${this.S4()}`;

    /** GUID */
    private S4(): string {
        const ran = (1 + Math.random()) * 0x10000;
        return (ran | 0).toString(16).substring(1);
    }
    /** GUID */
}
