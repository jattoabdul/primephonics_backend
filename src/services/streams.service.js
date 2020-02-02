import database from '../models';

class StreamService {
  static async getAllStreams() {
    try {
      return await database.Stream.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getAllStreamsReport() {
    try {
      let reportStats = {
        totalRevenue: 0,
        totalSecondsStreamed: 0
      }

      let labelReportStat = await database.Stream.findAll({
        raw: true,
        attributes: [
          'track_label',
          [database.sequelize.fn('sum', database.sequelize.col('fee')), 'labelRevenue'],
          [database.sequelize.fn('sum', database.sequelize.col('seconds')), 'secondsStreamed']
        ],
        group: ['track_label'],
      });

      labelReportStat.forEach((stat) => {
        reportStats.totalRevenue += parseFloat(stat.labelRevenue)
        reportStats.totalSecondsStreamed += parseInt(stat.secondsStreamed)
      })

      labelReportStat = labelReportStat.map((label) => {
        label.percentageStreamed = (label.secondsStreamed/reportStats.totalSecondsStreamed) * 100;
        const labelRevenue = (label.percentageStreamed / 100) * reportStats.totalRevenue;
        label.revenueSplit = parseFloat((Math.round((labelRevenue + Number.EPSILON) * 100) / 100).toFixed(2))

        return label;
      });

      labelReportStat = labelReportStat.reduce((accumulatedReport, currentReport) => ({ ...accumulatedReport, [currentReport.track_label]: currentReport.revenueSplit }), {})

      return  labelReportStat;
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

  static async getAUserReport(id) {
    try {
      let userStreamReport = await database.Stream.findAll({
        raw: true,
        attributes: [
          ['user_id', 'User'],
          [database.sequelize.cast(database.sequelize.fn('sum', database.sequelize.col('seconds')), 'int'), 'Total Streamed']
        ],
        group: ['user_id'],
        where: { user_id: Number(id) },
      });

      return userStreamReport[0];
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
}

export default StreamService;