export class RingerInjection
{
  constructor(lingerName: string, gtt: number, ccPerHr: number, battery: number, restTime: number
    , ivTotalAmount: number, ivCurrentAmount: number)
  {
    this.lingerName = lingerName;
    this.gtt = gtt;
    this.ccPerHr = ccPerHr;
    this.battery = battery;
    this.restTime = restTime;
    this.ivTotalAmount = ivTotalAmount;
    this.ivCurrentAmount = ivCurrentAmount;
  }

  lingerName: string;
  ivTotalAmount: number;
  ivCurrentAmount: number;
  gtt: number;
  ccPerHr: number;
  battery: number;
  restTime: number;
}
