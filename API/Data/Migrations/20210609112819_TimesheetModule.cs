using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Data.Migrations
{
    public partial class TimesheetModule : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TimesheetMonths",
                columns: table => new
                {
                    TMonthId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Year = table.Column<int>(type: "INTEGER", nullable: false),
                    Month = table.Column<int>(type: "INTEGER", nullable: false),
                    TotalHoursMonthly = table.Column<float>(type: "REAL", nullable: false),
                    Approved = table.Column<bool>(type: "INTEGER", nullable: false),
                    AppUserId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TimesheetMonths", x => x.TMonthId);
                    table.ForeignKey(
                        name: "FK_TimesheetMonths_AspNetUsers_AppUserId",
                        column: x => x.AppUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TimesheetWeeks",
                columns: table => new
                {
                    TWeekId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    StartWeek = table.Column<DateTime>(type: "TEXT", nullable: false),
                    EndWeek = table.Column<DateTime>(type: "TEXT", nullable: false),
                    TotalHoursWeekly = table.Column<float>(type: "REAL", nullable: false),
                    TMonthId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TimesheetWeeks", x => x.TWeekId);
                    table.ForeignKey(
                        name: "FK_TimesheetWeeks_TimesheetMonths_TMonthId",
                        column: x => x.TMonthId,
                        principalTable: "TimesheetMonths",
                        principalColumn: "TMonthId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Timesheets",
                columns: table => new
                {
                    TimesheetId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Date = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Project = table.Column<string>(type: "TEXT", nullable: true),
                    Time = table.Column<float>(type: "REAL", nullable: false),
                    TWeekId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Timesheets", x => x.TimesheetId);
                    table.ForeignKey(
                        name: "FK_Timesheets_TimesheetWeeks_TWeekId",
                        column: x => x.TWeekId,
                        principalTable: "TimesheetWeeks",
                        principalColumn: "TWeekId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_TimesheetMonths_AppUserId",
                table: "TimesheetMonths",
                column: "AppUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Timesheets_TWeekId",
                table: "Timesheets",
                column: "TWeekId");

            migrationBuilder.CreateIndex(
                name: "IX_TimesheetWeeks_TMonthId",
                table: "TimesheetWeeks",
                column: "TMonthId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Timesheets");

            migrationBuilder.DropTable(
                name: "TimesheetWeeks");

            migrationBuilder.DropTable(
                name: "TimesheetMonths");
        }
    }
}
