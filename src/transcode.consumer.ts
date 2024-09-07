import { Process, Processor } from '@nestjs/bull';
import { TRANSCODE_QUEUE } from './constants';
import { Job } from 'bull';
import { Logger } from '@nestjs/common';

@Processor(TRANSCODE_QUEUE)
export class TranscodeConsumer {
  private readonly logger = new Logger(TranscodeConsumer.name);

  @Process()
  async transcode(job: Job<unknown>) {
    this.logger.log(`Transcoding message : ${job.id}`);
    this.logger.debug(`Data : ${job.data}`);
    await new Promise<void>((res) => setTimeout(() => res(), 3000));
    this.logger.log(`Transcoding complete for : ${job.id}`);
  }
}
