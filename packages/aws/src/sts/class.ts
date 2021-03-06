import { STSClient, GetCallerIdentityCommand } from "@aws-sdk/client-sts";
import { ServiceEnum, TEnvironment, TRegion } from "@nextbnb/common";
import { AWSService } from "../class";
import { AWSServiceEnum } from "../enum";
import { IGetCallerInfo } from "./type";

/**
 * Blueprint of the class which enables performing STS Service actions
 */
export class STS extends AWSService {
  protected service: STSClient;

  constructor(
    serviceName: ServiceEnum,
    region: TRegion,
    environment: TEnvironment
  ) {
    super(serviceName, AWSServiceEnum.sts, environment);
    this.service = new STSClient({ region });
  }

  /**
   * @public
   * Retrieves the following information of the current user:
   * - UserId
   * - Arn
   * - Account ID number
   */
  async getCallerInfo(): Promise<IGetCallerInfo | undefined> {
    try {
      const { Account, Arn, UserId } = await this.service.send(
        new GetCallerIdentityCommand({})
      );
      return {
        account: Account,
        arn: Arn,
        userId: UserId,
      };
    } catch (err) {
      throw err;
    }
  }
}
