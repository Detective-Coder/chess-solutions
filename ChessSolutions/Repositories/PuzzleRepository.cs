using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using ChessSolutions.Controllers;
using ChessSolutions.Models;
using ChessSolutions.Utils;

namespace ChessSolutions.Repositories
{
    public class PuzzleRepository : BaseRepository, IPuzzleRepository
    {
        public PuzzleRepository(IConfiguration configuration) : base(configuration) { }

        public List<Puzzle> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT p.id, p.name, p.fileDirectory, p.difficultyLevel
                    FROM Puzzle p";

                    var reader = cmd.ExecuteReader();

                    var puzzles = new List<Puzzle>();
                    while (reader.Read())
                    {
                        puzzles.Add(new Puzzle()
                        {
                            id = DbUtils.GetInt(reader, "id"),
                            name = DbUtils.GetString(reader, "name"),
                            fileDirectory = DbUtils.GetString(reader, "fileDirectory"),
                            difficultyLevel = DbUtils.GetString(reader, "difficultyLevel")
                        });
                    }

                    reader.Close();

                    return puzzles;
                }
            }
        }
    }
}
