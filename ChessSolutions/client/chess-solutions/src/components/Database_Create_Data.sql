CREATE TABLE [UserProfile] (
  [id] int PRIMARY KEY identity,
  [firstName] nvarchar(255),
  [lastName] nvarchar(255),
  [userName] nvarchar(255),
  [email] nvarchar(255),
  [firebaseId] nvarchar(255)
)
GO

CREATE TABLE [Solution] (
  [id] int PRIMARY KEY identity,
  [content] nvarchar(255),
  [userProfileId] int,
  [puzzleId] int,
  [date] nvarchar(255)
)
GO

CREATE TABLE [Comment] (
  [id] int PRIMARY KEY identity,
  [solutionId] int,
  [userProfileId] int,
  [content] nvarchar(255),
  [date] nvarchar(255)
)
GO

CREATE TABLE [Reaction] (
  [id] int PRIMARY KEY identity,
  [solutionId] int,
  [userProfileId] int,
  [name] bit
)
GO

CREATE TABLE [Puzzle] (
  [id] int PRIMARY KEY identity,
  [name] nvarchar(255),
  [fileDirectory] nvarchar(255),
  [difficultyLevel] nvarchar(255)
)
GO

ALTER TABLE [Comment] ADD FOREIGN KEY ([solutionId]) REFERENCES [Solution] ([id])
GO

ALTER TABLE [Comment] ADD FOREIGN KEY ([userProfileId]) REFERENCES [UserProfile] ([id])
GO

ALTER TABLE [Solution] ADD FOREIGN KEY ([userProfileId]) REFERENCES [UserProfile] ([id])
GO

ALTER TABLE [Solution] ADD FOREIGN KEY ([puzzleId]) REFERENCES [Puzzle] ([id])
GO

ALTER TABLE [Reaction] ADD FOREIGN KEY ([solutionId]) REFERENCES [Solution] ([id])
GO

ALTER TABLE [Reaction] ADD FOREIGN KEY ([userProfileId]) REFERENCES [UserProfile] ([id])
GO
