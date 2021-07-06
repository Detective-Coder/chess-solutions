﻿using ChessSolutions.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChessSolutions.Controllers;
using ChessSolutions.Utils;

namespace ChessSolutions.Repositories
{
    public class SolutionRepository : BaseRepository, ISolutionRepository
    {
        public SolutionRepository(IConfiguration configuration) : base(configuration) { }
        public List<Solution> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT s.id, s.content, s.userProfileId, s.puzzleId, s.date
                    FROM Solution s";

                    var reader = cmd.ExecuteReader();

                    var solutions = new List<Solution>();
                    while (reader.Read())
                    {
                        solutions.Add(new Solution()
                        {
                            id = DbUtils.GetInt(reader, "id"),
                            content = DbUtils.GetString(reader, "content"),
                            userProfileId = DbUtils.GetInt(reader, "userProfileId"),
                            puzzleId = DbUtils.GetInt(reader, "puzzleId"),
                            date = DbUtils.GetString(reader, "date")
                        });
                    }

                    reader.Close();

                    return solutions;
                }
            }
        }
    }
}
