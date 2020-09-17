export class RingerInjection
{
  constructor(lingerSN: string, lingerName: string, gtt: number, ccPerHr: number, battery: number, restTime: number
    , ivTotalAmount: number, ivCurrentAmount: number)
  {
    this.lingerSN = lingerSN;
    this.lingerName = lingerName;
    this.gtt = gtt;
    this.ccPerHr = ccPerHr;
    this.battery = battery;
    this.restTime = restTime;
    this.ivTotalAmount = ivTotalAmount;
    this.ivCurrentAmount = ivCurrentAmount;
  }

  lingerSN: string;
  lingerName: string;
  ivTotalAmount: number;
  ivCurrentAmount: number;
  gtt: number;
  ccPerHr: number;
  battery: number;
  restTime: number;
}
