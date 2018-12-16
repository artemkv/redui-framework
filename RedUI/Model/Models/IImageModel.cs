using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Models
{
	public interface IImageModel : IDataBoundControlModel
	{
		string source { get; }
		string alternateText { get; }
		int width { get; }
		int height { get; }
	}
}
