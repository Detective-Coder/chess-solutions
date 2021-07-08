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

        public Puzzle GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT p.id, p.name, p.fileDirectory, p.difficultyLevel
                    FROM Puzzle p
                    WHERE p.id = @id";

                    DbUtils.AddParameter(cmd, "@id", id);

                    var reader = cmd.ExecuteReader();

                    Puzzle puzzle = null;
                    if (reader.Read())
                    {
                        puzzle = new Puzzle()
                        {
                            id = id,
                            name = DbUtils.GetString(reader, "name"),
                            fileDirectory = DbUtils.GetString(reader, "fileDirectory"),
                            difficultyLevel = DbUtils.GetString(reader, "difficultyLevel")
                        };
                    }

                    reader.Close();

                    return puzzle;
                }
            }
        }

        public Puzzle GetPuzzleByIdWithSolution(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT p.id AS puzzleId, p.name, p.fileDirectory, p.difficultyLevel,
                           s.id AS solutionId, s.content, s.userProfileId, s.puzzleId, s.date,
                           c.id AS commentId, c.solutionId, c.userProfileId, c.content AS commentContent, c.date AS commentDate
                      FROM Puzzle p
                           LEFT JOIN Solution s on s.puzzleId = p.id
                           LEFT JOIN Comment c on c.solutionId = s.id
                      WHERE p.id = @id
                      ";
                    DbUtils.AddParameter(cmd, "@id", id);
                    var reader = cmd.ExecuteReader();

                    Puzzle puzzle = null;
                    while (reader.Read())
                    {
                        var puzzleId = DbUtils.GetInt(reader, "puzzleId");

                        if (puzzle == null)
                        {
                            puzzle = new Puzzle()
                            {
                                id = DbUtils.GetInt(reader, "puzzleId"),
                                name = DbUtils.GetString(reader, "name"),
                                fileDirectory = DbUtils.GetString(reader, "fileDirectory"),
                                difficultyLevel = DbUtils.GetString(reader, "difficultyLevel"),
                                Solution = new List<Solution>()
                            };
                        }

                        if (DbUtils.IsNotDbNull(reader, "solutionId"))
                        {


                                puzzle.Solution.Add(new Solution()
                                {
                                    id = DbUtils.GetInt(reader, "solutionId"),
                                    content = DbUtils.GetString(reader, "content"),
                                    userProfileId = DbUtils.GetInt(reader, "userProfileId"),
                                    puzzleId = DbUtils.GetInt(reader, "puzzleId"),
                                    date = DbUtils.GetString(reader, "date"),
                                });
                        }
    

                    }

                    reader.Close();

                    return puzzle;
                }
            }
        }
    }
}
