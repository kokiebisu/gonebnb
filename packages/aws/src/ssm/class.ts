import {
  SSMClient,
  GetParameterCommand,
  PutParameterCommand,
  PutParameterCommandOutput,
} from "@aws-sdk/client-ssm";
import { ServiceEnum, TEnvironment, TRegion } from "@nextbnb/common";
// import { ApiError } from "@nextbnb/error";
import { AWSService } from "../class";
import { AWSServiceEnum } from "../enum";

/**
 * @public
 * Blueprint of the class which performing SSM Service actions
 */
export class SSM extends AWSService {
  protected service: SSMClient;

  /**
   *
   * @param region
   * @param environment
   */
  constructor(
    serviceName: ServiceEnum,
    region: TRegion,
    environment: TEnvironment
  ) {
    super(serviceName, AWSServiceEnum.ssm, environment);
    this.service = new SSMClient({ region });
  }

  /**
   *
   * @param key
   * @param includeEnvironment
   * @returns
   */
  public async getServiceSecret(key: string): Promise<string | undefined> {
    const path = `/${this.environment as TEnvironment}/${
      this.serviceName as ServiceEnum
    }/${key}`;
    try {
      const response = await this.service.send(
        new GetParameterCommand({
          Name: path,
          WithDecryption: true,
        })
      );
      return response.Parameter?.Value;
    } catch (err) {
      throw new Error(`[SSM GetParameterCommand] ${err}`);
    }
  }

  /**
   *
   * @param key
   * @param value
   * @returns
   */
  public async setServiceSecret(
    key: string,
    value: string
  ): Promise<PutParameterCommandOutput> {
    const path = `/${this.environment as TEnvironment}/${
      this.serviceName as ServiceEnum
    }/${key}`;
    try {
      const response = await this.service.send(
        new PutParameterCommand({
          Name: path,
          Value: value,
          Overwrite: true,
          DataType: "text",
          Type: "String",
        })
      );
      return response;
    } catch (err) {
      throw new Error(`[SSM PutParameterCommand] ${err}`);
    }
  }
}
