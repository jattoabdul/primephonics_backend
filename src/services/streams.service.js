import database from '../models';

class StreamService {
  static async getAllStreams() {
    try {
      return await database.Stream.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addStream(newStream) {
    try {
      return await database.Stream.create(newStream);
    } catch (error) {
      throw error;
    }
  }

  static async updateStream(id, updateStream) {
    try {
      const StreamToUpdate = await database.Stream.findOne({
        where: { id: Number(id) }
      });

      if (StreamToUpdate) {
        await database.Stream.update(updateStream, { where: { id: Number(id) } });

        return updateStream;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAStream(id) {
    try {
      const theStream = await database.Stream.findOne({
        where: { id: Number(id) }
      });

      return theStream;
    } catch (error) {
      throw error;
    }
  }

  static async deleteStream(id) {
    try {
      const StreamToDelete = await database.Stream.findOne({ where: { id: Number(id) } });

      if (StreamToDelete) {
        const deletedStream = await database.Stream.destroy({
          where: { id: Number(id) }
        });
        return deletedStream;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  // TODO: add getAllLabelReport and fetchSingleUserStream
}

export default StreamService;