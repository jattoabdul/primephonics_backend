import StreamService from '../services/streams.service';
import Util from '../utils/Utils';

const util = new Util();

class StreamController {
  static async getAllStreams(req, res) {
    try {
      const allStreams = await StreamService.getAllStreams();
      if (allStreams.length > 0) {
        util.setSuccess(200, 'Streams retrieved', allStreams);
      } else {
        util.setSuccess(200, 'No Stream found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async getAllStreamsReport(req, res) {
    try {
      const allStreamsReport = await StreamService.getAllStreamsReport();
      if (allStreamsReport.constructor === Object && Object.entries(allStreamsReport).length > 0) {
        util.setSuccess(200, 'Streams Report retrieved', allStreamsReport);
      } else {
        util.setSuccess(200, 'No Stream Report found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addStream(req, res) {
    if (!req.body.title || !req.body.price || !req.body.description) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newStream = req.body;
    try {
      const createdStream = await StreamService.addStream(newStream);
      util.setSuccess(201, 'Stream Added!', createdStream);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedStream(req, res) {
    const alteredStream = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateStream = await StreamService.updateStream(id, alteredStream);
      if (!updateStream) {
        util.setError(404, `Cannot find Stream with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Stream updated', updateStream);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAStream(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theStream = await StreamService.getAStream(id);

      if (!theStream) {
        util.setError(404, `Cannot find Stream with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Stream', theStream);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAUserReport(req, res) {
    util.setSuccess(200, 'No User Stream Report found');
    return util.send(res);
  }

  static async deleteStream(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const StreamToDelete = await StreamService.deleteStream(id);

      if (StreamToDelete) {
        util.setSuccess(200, 'Stream deleted');
      } else {
        util.setError(404, `Stream with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default StreamController;
