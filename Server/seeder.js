import mongoose from 'mongoose';
import { connectDB } from './Config/db.js';

import dotenv from 'dotenv';

import { mockAssignments, mockSupplies, mockUsers } from './__Mocks__/index.js';

import User from './Model/user.model.js';
import Supply from './Model/supply.model.js';
import Assignment from './Model/assignment.model.js';

dotenv.config();

connectDB();

/**
 * imports seeder data to MongoDB Atlas
 */
const importData = async () => {
  try {
    // delete stuff before inserting new stuff
    await User.deleteMany();
    await Supply.deleteMany();
    await Assignment.deleteMany();

    // insert supplies
    const insertedSupplies = await Supply.insertMany(mockSupplies);
    const suppliesIdArray = insertedSupplies.map((supply) => supply._id);

    // create assignments with supplies and save to db
    mockAssignments.forEach((assignment) => {
      assignment.supplies = suppliesIdArray;
    });

    const insertedAssignments = await Assignment.insertMany(mockAssignments);

    // add assignments to users
    mockUsers.forEach((user, index) => {
      if (insertedAssignments[index])
        user.assignments = insertedAssignments[index]._id;
    });

    const insertedUsers = await User.insertMany(mockUsers);

    console.log('###### CONSOLE LOGGING MOCK INSERTION DATA ######');
    console.log({ insertedUsers });
    console.log({ insertedAssignments });
    console.log({ insertedSupplies });

    console.info('data imported');
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// destroy all data in mongoDB database
const destroyData = async () => {
  try {
    // delete stuff
    await User.deleteMany();
    await Supply.deleteMany();
    await Assignment.deleteMany();

    console.info('data destroyed');
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

process.argv[2] === '-d' ? destroyData() : importData();
