using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Models
{
	interface IWindowModel : IContainerControlModel
	{
		string title { get; }
		int left { get; }
		int top { get; }
		int width { get; }
		int height { get; }
	}
}
