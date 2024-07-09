import { Injectable } from '@nestjs/common';
import { DocumentDriveServer, DriveInput, PullResponderTransmitter } from 'document-drive';
import { DocumentDriveAction } from 'document-model-libs/document-drive';
import { Operation } from "document-model/document";

@Injectable()
export class DocumentDriveService {

    private _driveServer: DocumentDriveServer

    constructor() {
        this._driveServer = new DocumentDriveServer([]);
    }

    addDrive(input: DriveInput) {
        return this._driveServer.addDrive(input);
    }

    removeDrive(driveId: string) {
        return this._driveServer.deleteDrive(driveId);
    }

    pushUpdates(driveId: string, documentId: string | undefined = undefined, operations: Operation[]) {
        if (documentId) {
            return this._driveServer.queueOperations(driveId, documentId, operations);
        }

        return this._driveServer.queueDriveOperations(driveId, operations as Operation<DocumentDriveAction>[]);
    }

    async getStrands(driveId: string, listenerId: string, since?: string) {
        const transmitter = (await this._driveServer.getTransmitter(driveId, listenerId)) as PullResponderTransmitter;
        return transmitter.getStrands(since);
    }

    getDocument(driveId: string, id: string) {
        return this._driveServer.getDocument(driveId, id);
    }

    getDrive(id: string) {
        return this._driveServer.getDrive(id);
    }

    getDrives() {
        return this._driveServer.getDrives();
    }
}
