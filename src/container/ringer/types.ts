export class RingerInjection
{
  constructor(lingerSN: string, lingerName: string, gtt: number, ccPerHr: number, battery: number, restTime: number
    , ivTotalAmount: number, ivCurrentAmount: number, ivInfo: IVInfo)
  {
    this.lingerSN = lingerSN;
    this.lingerName = lingerName;
    this.ivTotalAmount = ivTotalAmount;

    this.gtt = gtt;
    this.ccPerHr = ccPerHr;
    this.battery = battery;
    this.restTime = restTime;
    this.ivCurrentAmount = ivCurrentAmount;
    this.ivInfo = ivInfo;
  }

  lingerSN: string;
  lingerName: string;
  ivTotalAmount: number;
  ivCurrentAmount: number;
  gtt: number;
  ccPerHr: number;
  battery: number;
  restTime: number;
  ivInfo: IVInfo;
}

export interface IVInfo {
  totalAmount: number;
  period: number;
  speed: number;
}

export class IVInfoCrtDto implements IVInfo
{
  constructor(totalAmong: number, period: number, speed: number)
  {
    this.totalAmount = totalAmong;
    this.period = period;
    this.speed = speed;
    this.totalAmountStr = '';
    this.periodStr = '';
    this.speedStr = '';
  }

  totalAmount: number;
  period: number;
  speed: number;
  totalAmountStr: string;
  periodStr: string;
  speedStr: string;
}

export class IVInfoError
{
  constructor()
  {
    this.totalAmount = '';
    this.period = '';
    this.speed = '';
  }

  totalAmount: string;
  period: string;
  speed: string;
}
