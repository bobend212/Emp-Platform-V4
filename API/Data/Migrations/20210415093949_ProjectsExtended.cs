using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Data.Migrations
{
    public partial class ProjectsExtended : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreateBy",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "TimeEstimated",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "TimeExecuted",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "UpdateBy",
                table: "Projects");

            migrationBuilder.RenameColumn(
                name: "SentDate",
                table: "Projects",
                newName: "SlabStageStatus");

            migrationBuilder.RenameColumn(
                name: "PickUpDate",
                table: "Projects",
                newName: "ProductionStageStatus");

            migrationBuilder.RenameColumn(
                name: "Notes",
                table: "Projects",
                newName: "DesignInfo");

            migrationBuilder.RenameColumn(
                name: "Department",
                table: "Projects",
                newName: "Comments");

            migrationBuilder.RenameColumn(
                name: "Area",
                table: "Projects",
                newName: "BRegsStageStatus");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdateDate",
                table: "Projects",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "BRegsIssuedDate",
                table: "Projects",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "BRegsRequiredDate",
                table: "Projects",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "DeliveryDate",
                table: "Projects",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "DrgsReceived",
                table: "Projects",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "EngReceived",
                table: "Projects",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "FullSetIssuedDate",
                table: "Projects",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "FullSetRequiredDate",
                table: "Projects",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "Issued",
                table: "Projects",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "IssuingIssuedDate",
                table: "Projects",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "IssuingRequiredDate",
                table: "Projects",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "OrderPlaced",
                table: "Projects",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "SlabIssuedDate",
                table: "Projects",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "SlabRequiredDate",
                table: "Projects",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BRegsIssuedDate",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "BRegsRequiredDate",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "DeliveryDate",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "DrgsReceived",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "EngReceived",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "FullSetIssuedDate",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "FullSetRequiredDate",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "Issued",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "IssuingIssuedDate",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "IssuingRequiredDate",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "OrderPlaced",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "SlabIssuedDate",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "SlabRequiredDate",
                table: "Projects");

            migrationBuilder.RenameColumn(
                name: "SlabStageStatus",
                table: "Projects",
                newName: "SentDate");

            migrationBuilder.RenameColumn(
                name: "ProductionStageStatus",
                table: "Projects",
                newName: "PickUpDate");

            migrationBuilder.RenameColumn(
                name: "DesignInfo",
                table: "Projects",
                newName: "Notes");

            migrationBuilder.RenameColumn(
                name: "Comments",
                table: "Projects",
                newName: "Department");

            migrationBuilder.RenameColumn(
                name: "BRegsStageStatus",
                table: "Projects",
                newName: "Area");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdateDate",
                table: "Projects",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "TEXT");

            migrationBuilder.AddColumn<int>(
                name: "CreateBy",
                table: "Projects",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<float>(
                name: "TimeEstimated",
                table: "Projects",
                type: "REAL",
                nullable: true);

            migrationBuilder.AddColumn<float>(
                name: "TimeExecuted",
                table: "Projects",
                type: "REAL",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UpdateBy",
                table: "Projects",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }
    }
}
