export interface Ringer
{
  userId: string | undefined;
  sn: string;
  ringerName: string;
  hospital: string;
}

export class RingerCreateDto implements Ringer
{
  constructor()
  {
    this.sn = '';
    this.ringerName = '';
    this.hospital = '';
  }

  userId: string | undefined;
  sn: string;
  ringerName: string;
  hospital: string;
}

export class RingerCreateErrorData implements Ringer
{
  constructor()
  {
    this.sn = '';
    this.ringerName = '';
    this.hospital = '';
  }

  userId: string | undefined;
  sn: string;
  ringerName: string;
  hospital: string;
}
